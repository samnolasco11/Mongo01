[{$match: {
  "genre": /Thriller|Mystery|Horror/
}}, {$lookup: {
  from: 'ratings',
  localField: 'movieId',
  foreignField: 'movieId',
  as: 'ratings'
}}, {$addFields: {
  num_ratings: {$size: "$ratings"}
}}, {$sort: {
  "num_ratings": -1
}}]
