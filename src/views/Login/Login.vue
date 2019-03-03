<template>
    <div>
        <i-button type="primary" @click="modal = true">显示对话框</i-button>
        <Modal
            title="普通的Modal对话框标题">
            <p>对话框内容</p>
            <p>对话框内容</p>
            <p>对话框内容</p>
        </Modal>
        <Row>
            <Col span="6">
                <i-form :model="formItem" :label-width="80">
                    <Form-item label="手机号">
                        <i-input :value.sync="formItem.phone" v-model="formItem.phone" placeholder="手机号"></i-input>
                    </Form-item>
                    <Form-item label="密码">
                        <i-input type="password" :value.sync="formItem.password" v-model="formItem.password" placeholder="密码"></i-input>
                    </Form-item>
                    <Form-item>
                        <i-button type="primary" @click="doLogin()">提交</i-button>
                    </Form-item>
                </i-form>
            </Col>
        </Row>
    </div>
</template>

<script>
import Cookies from 'js-cookie'
import $api from '@/api';
import { Modal } from 'iview'
export default {
    data() {
        return {
            formItem: {
                phone: '',
                password: ''
            },
            modal: false
        }
    },
    methods: {
        doLogin() {
            $api.doLogin(this.formItem.phone, this.formItem.password)
            .then(response => {
                if (response.code == 200) {
                    this.$Message.info(response.msg);
                    let data = response.data
                    Cookies.set('uid', data.uid)
                    Cookies.set('token', data.token)
                    Cookies.set('username', data.username)
                } else {
                    this.$Message.error(response.msg);
                }
            })
        },
        show () {
            this.$Modal.info('aaaa')
        }
    }
}
</script>

<style lang="css">
</style>
