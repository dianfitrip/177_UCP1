module.exports  = (sequelize, DataTypes) => {
    const kandang = sequelize.define('Kandang', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_hewan: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nama_petugas: {
            type: DataTypes.STRING,
            allowNull: false
        },

        usia: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        jenis: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tahun: {
            type: DataTypes.DATE,
            allowNull: false
        }
        
    }, {
        tableName: 'kandang',
        timestamps: true,
        freezeTableName: true
    });
    return kandang;
}