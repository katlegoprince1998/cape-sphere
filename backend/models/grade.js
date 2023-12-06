module.exports=(sequelize,DataTypes)=>{
    const Grade=sequelize.define("Grade",{

grd_id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},grd_score:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},grd_total:{
    type:DataTypes.INTEGER,
    allowNull:false,
    validate:{
        notEmpty:true,
    },
},
grd_date:{
    type:DataTypes.DATE,
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
}
    });
    return Grade;
};

