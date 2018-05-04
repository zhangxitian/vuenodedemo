<template>
    <div class="formtest">
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="输入框" >
                <el-input placeholder="请输入内容" v-model="form.input"></el-input>
            </el-form-item>
            <el-form-item label="复选框">
                <el-checkbox-group v-model="form.checkbox">
                    <el-checkbox label="选1" name="checkbox"></el-checkbox>
                    <el-checkbox label="选2" name="checkbox"></el-checkbox>
                    <el-checkbox label="选3" name="checkbox"></el-checkbox>
                    <el-checkbox label="选4" name="checkbox"></el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="单选框">
                <el-radio-group v-model="form.radio">
                    <el-radio label="单选1"></el-radio>
                    <el-radio label="单选2"></el-radio>
                </el-radio-group>
            </el-form-item>
            <el-form-item label="时间">
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="textarea">
                <el-input type="textarea" placeholder="请输入内容" v-model="textarea"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                form: {
                    input: "",
                    checkbox: ['选1'],
                    radio: "单选1"
                }
            }
        }
    }
</script>
<style>
    .formtest{ padding-top: 70px;width: 40% }
    .formtest .line{text-align: center}
</style>