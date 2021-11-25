import * as mongoose from "mongoose";

mongoose.connect(`mongodb://leon:Leon.pu199139!@1.116.37.43:9702/school`, error => {
    if (!error) {
        console.log(`连接成功`);
        return;
    }

    console.log(`连接失败:`, error);
});

const TeacherSchema = new mongoose.Schema({
    _id: { type: String },
    name: { type: String },
    age: { type: Number }
});

const TeachersModel = mongoose.model('Teacher', TeacherSchema);

TeachersModel.find({}, (err, docs) => {
    console.log('docs:', docs);

});
