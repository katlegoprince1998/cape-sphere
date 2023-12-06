module.exports=(sequelize,DataTypes)=>{
    const Program=sequelize.define("Program",{

pro_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},prog_name:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},cand_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},
coh_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},
ment_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
}
    });
    return Program;
};

