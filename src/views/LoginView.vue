<template>
    <div>
        <label for="id">아이디</label>
        <input type="text" v-model="user"> <br>
        <label for="pw">패스워드</label>
        <input type="password"> <br>
        <button @click="loginUser">로그인</button>
        <button @click="$router.go(-1)">취소</button>
    </div>
</template>

<script>
export default {
    name : 'LoginView',
    data : () => ({
        user : "",
    }),
    methods : {
        loginUser : function () {
            this.$emit("login-user",this.user);
            this.$router.push('/');
        }
    }
}
</script>