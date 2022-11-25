module.exports = (sequelize, DataTypes) => {
  const PersonalityQns = sequelize.define("PersonalityQns", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    EXT1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EXT2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EXT3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EXT4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EXT5: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EXT6: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EXT7: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EXT8: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EXT9: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EXT10: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EST1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EST2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EST3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EST4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EST5: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EST6: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EST7: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EST8: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EST9: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EST10: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AGR1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AGR2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AGR3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AGR4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AGR5: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AGR6: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AGR7: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AGR8: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AGR9: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    AGR10: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CSN1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CSN2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CSN3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CSN4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CSN5: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CSN6: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CSN7: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CSN8: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CSN9: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    CSN10: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OPN1: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OPN2: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OPN3: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OPN4: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OPN5: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OPN6: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OPN7: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OPN8: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OPN9: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    OPN10: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return PersonalityQns;
};
