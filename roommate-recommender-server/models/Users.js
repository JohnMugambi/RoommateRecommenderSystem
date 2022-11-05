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
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  // Users.associate = (modles)=>{
  //   Users.hasOne(models.Preference,{
  //     onDelete: "cascade"
  //   } )
  //}
  return Users;
};
