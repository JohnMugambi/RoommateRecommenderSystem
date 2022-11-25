module.exports = (sequelize, DataTypes) => {
  const Preferences = sequelize.define("Preferences", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foodpref: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    culinaryskills: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alcohol: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    smoking: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pets: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sleeppatterns: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    personality: {
      type: DataTypes.STRING,
    },
  });
  return Preferences;
};
