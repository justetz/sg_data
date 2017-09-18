'use strict'

const Sequelize = require('sequelize')
const moment = require('moment')

module.exports = (connection, DataTypes) => {
    let Meeting = connection.define('meeting', {
        sessionUniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        bodyUniqueId: {
            type: DataTypes.STRING,
            primaryKey: true,
            required: true
        },
        meetingNum: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        date: {
            type: DataTypes.DATEONLY,
            required: true
        },
        location: {
            type: DataTypes.STRING,
            required: true
        }
    })

    Meeting.associate = models => {
        Meeting.belongsTo(models['session'], {
            targetKey: 'uniqueId',
            foreignKey: 'sessionUniqueId'
        })

        Meeting.belongsTo(models['session'], {
            targetKey: 'bodyUniqueId',
            foreignKey: 'bodyUniqueId'
        })
    }

    Meeting.queryIncludes = (connection) => {
        return [
            {
                model: connection.model('session'),
                where: {
                    $and: {
                        uniqueId: { $eq: Sequelize.col('meeting.sessionUniqueId') },
                        bodyUniqueId: { $eq: Sequelize.col('meeting.bodyUniqueId') }
                    }
                }
            }
        ]
    }

    return Meeting
}
