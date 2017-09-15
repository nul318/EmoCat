module.exports = function(sequelize, DataTypes){
  var emoticon = sequelize.define('emoticon', {
    happiness: {
      type: DataTypes.DOUBLE(30, 30),
      allowNull: false,
      comment: "행복 지수"
    },
    face_id: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: '해당된 사람의 얼굴 id값'
    }
  }, {
    tableName: 'emoticon',
    comment: 'emoticon 정보 테이블',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  emoticon.associate = function(models){
    emoticon.belongsTo(models.device, { foreignKey: {name: 'device_id', allowNull: true,}, onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  }
  return emoticon;
};
