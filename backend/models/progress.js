module.exports=(sequelize,DataTypes)=>{
    const Progress=sequelize.define("Progress",{

prog_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},prog_curr_level:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},cand_overall_level:{
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
},
cand_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
}
    });
    return Progress;
};

