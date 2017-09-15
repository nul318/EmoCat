module.exports = function(sequelize, DataTypes){
  var device = sequelize.define('device', {
    deviceId: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "device 고유값"
    }
  }, {
    tableName: 'device',
    comment: 'device 정보 테이블',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  device.associate = function(models){
    device.belongsTo(models.user, { foreignKey: {name: 'user_id', allowNull: true,}, onDelete: 'CASCADE', onUpdate: 'CASCADE'});
  }
  return device;
};
