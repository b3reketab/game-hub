import { NextFunction, Request, Response } from 'express';
import { UpdatedRequest } from '../types';
import Game from '../model/gameModel';

// Get all games
export const getGames = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    next(error);
  }
};

// Get a single game by ID
export const getGame = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const game = await Game.findById(id);

    if (!game) {
      res.status(404).json({ message: "Game not found" });
      return;
    }

    res.status(200).json(game);
  } catch (error) {
    next(error);
  }
};

// Create a new game
export const createGame = async (req: UpdatedRequest, res: Response, next: NextFunction) => {
  try {
    const {
      name,
      background_image,
      description_raw,
      released,
      parent_platforms,
      genres,
      publishers,
      developers,
      website
    } = req.body;

    const newGame = new Game({
      name,
      background_image,
      description_raw,
      released,
      parent_platforms,
      genres,
      publishers,
      developers,
      website
    });

    await newGame.save();
    res.status(201).json(newGame);
  } catch (error) {
    next(error);
  }
};

// Delete a game by ID
export const deleteGame = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;

    // Ensure there's more than one game before deleting
    const totalGames = await Game.countDocuments();
    if (totalGames <= 1) {
      res.status(400).json({ message: "You can't delete the last game" });
      return;
    }

    const deletedGame = await Game.findByIdAndDelete(id);
    if (!deletedGame) {
      res.status(404).json({ message: "Game not found" });
      return;
    }

    res.status(200).json({ message: "Game deleted successfully", deletedGame });
  } catch (error) {
    next(error);
  }
};
