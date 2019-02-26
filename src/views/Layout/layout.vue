<template>
  <div class="main">
    <Row class="haeder" type="flex" align="bottom">
      <Col span="4">
        <img src="../../images/xnlogo.png" alt="">
      </Col>
      <Col span="14"></Col>
      <Col span="6">
        <Row span="24" class="header-right" type="flex" justify="end">
          <Col span="6" class="login">
            <a>
              <Icon type="ios-contact-outline" size="20" />
              哈哈
            </a>
          </Col>
          <Col span="6" class="logout">
            <a>
              <Icon type="md-log-out" size="20" />
              退出
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col span="4" class="side-nav">
        <Menu mode="vertical" theme="dark" active-name="1" width="auto" accordion>
          <MenuItem name="1">
            <Icon type="ios-paper" />
            内容管理
          </MenuItem>
          <MenuItem name="2">
            <Icon type="ios-people" />
            用户管理
          </MenuItem>
          <MenuItem name="3">
            <Icon type="ios-people" />
            用户管理
          </MenuItem>
          <MenuItem name="4">
            <Icon type="ios-people" />
            用户管理
          </MenuItem>
          <Submenu name="5">
            <template slot="title">
              <Icon type="ios-people" />
              用户管理
            </template>
            <MenuItem name="5-1">新增用户</MenuItem>
            <MenuItem name="5-2">活跃用户</MenuItem>
          </Submenu>
        </Menu>
      </Col>
      <Col span="18" class="content">
        <router-view/>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: 'layout'
}
</script>

<style lang="css">
  @import "./layout.less";
</style>
