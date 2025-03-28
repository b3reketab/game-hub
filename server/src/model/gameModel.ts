import mongoose from 'mongoose';

const GameSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    background_image: { type: String },
    description_raw: { type: String },
    released: { type: Date },
    parent_platforms: [{ id: String, name: String, slug: String }],
    genre: [{ id: String, name: String }],
    publishers: [{ id: String, name: String }],
    developers: [{ id: String, name: String }],
    website: { type: String }
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

const Game = mongoose.model('Game', GameSchema);

export default Game;