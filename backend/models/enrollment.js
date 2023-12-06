module.exports=(sequelize,DataTypes)=>{
    const Enrollment=sequelize.define("Enrollement",{
cand_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},
cour_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
}
    });
    return Enrollment;
};

