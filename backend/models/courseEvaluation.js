module.exports=(sequelize,DataTypes)=>{
    const CourseEvaluation=sequelize.define("CourseEvaluation",{
        eva_id:{
            type:DataTypes.STRING,
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
    return CourseEvaluation;
};

