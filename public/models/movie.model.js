const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  duration: { type: Number, required: true },
  genre: { type: String, required: true },
  rating: { type: String, required: true },
  showTimes: [{ type: String }],
}, { timestamps: true });


movieSchema.methods.addShowTime = function(showTime) {
  this.showTimes.push(showTime);
  return this.save();
};


movieSchema.methods.removeShowTime = function(showTime) {
  const index = this.showTimes.indexOf(showTime);
  if (index !== -1) {
    this.showTimes.splice(index, 1);
    return this.save();
  }
};

// Create the Movie model
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;