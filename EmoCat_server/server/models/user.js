module.exports = function(sequelize, DataTypes){
  var user = sequelize.define('user', {
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "사용자 이름"
    },
    uid: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "사용자 ID"
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "사용자 비밀번호"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0',
      comment: '혹시 모를 사용자 구분용, 현재는 0으로 기본값'
    },
    key: {
      type: DataTypes.TEXT,
      allowNull: false,
      comment: "사용자 고유 key"
    }
  }, {
    tableName: 'user',
    comment: '사용자 정보 테이블',
    charset: 'utf8',
    collate: 'utf8_general_ci'
  });
  return user;
};
