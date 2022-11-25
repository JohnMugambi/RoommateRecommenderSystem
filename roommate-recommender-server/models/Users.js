module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Users.associate = (models) => {
    Users.hasOne(models.Preferences, {
      foreignKey: "email",
      onDelete: "cascade",
    });
    Users.hasOne(models.PersonalityQns, {
      foreignKey: "email",
      onDelete: "cascade",
    });
  };
  return Users;
};
