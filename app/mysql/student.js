'use strict'

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize
  const Student = app.modelMysql.define('student', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING(255), allowNull: false }
  })

  return Student
}
