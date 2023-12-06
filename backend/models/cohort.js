module.exports=(sequelize,DataTypes)=>{
    const Cohort=sequelize.define("Cohort",{

coh_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},coh_name:{
    type:DataTypes.STRING,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},coh_beg_date:{
    type:DataTypes.DATE,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},
coh_end_date:{
    type:DataTypes.DATE,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
}
    });
    return Cohort;
};

