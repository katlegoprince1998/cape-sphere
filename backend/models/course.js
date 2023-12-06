module.exports=(sequelize,DataTypes)=>{
    const Course=sequelize.define("Course",{

cour_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},cand_name:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},cand_level:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
}
    });
    return Course;
};

