module.exports = (factory, Models) => {
  factory.define("Author", Models.Author, {
    name: "Dorian Buck",
    createdAt: new Date(),
    updatedAt: new Date(),
  });
};
