module.exports=(sequelize,DataTypes)=>{
    const Mentor=sequelize.define("Mentor",{

ment_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},ment_name:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},ment_surname:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},
ment_email:{
    type:DataTypes.STRING,
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
    return Mentor;
};

