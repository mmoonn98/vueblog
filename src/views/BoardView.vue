<template>
    <div class='board'>
        <h1>게시글 목록입니다</h1>
        <!-- 페이지 이동을 위한 링크 -->
        <!--
        <router-link to="/board/1">1</router-link>
        <router-link to="/board/2">2</router-link>
        <router-link to="/board/3">3</router-link>
        -->

        <a v-for="n in num" :key="n"> 
            <router-link :to="`/board/${n}`">{{n}}</router-link>
        </a>
        <!-- 페이지 동적 라우팅 -->
        <router-view/>
    </div>
</template>

<script>
export default {
    name : 'BoardView',
    data : ()=> ({
        num : 3,
    })
}
</script>


<style scoped> 
/** scoped 를 사용하면 현재의 뷰에서만 css가 적용 */
.board {
    
}
</style>>