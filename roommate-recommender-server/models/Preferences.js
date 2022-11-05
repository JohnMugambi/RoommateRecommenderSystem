module.exports = (sequelize, DataTypes) => {
  const Preferences = sequelize.define("tblPreferences", {
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    foodpreference: {
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
