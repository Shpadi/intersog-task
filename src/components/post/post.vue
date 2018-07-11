<template>
    <div v-if="post.status===this.type" class="post-item">
        <div class="post-author">
            <div class="post-author-img">
                <img :src="post.author_pic"/>
            </div>
            <div class="post-author-info">
                <p>{{post.author_username}}</p>
                <p>{{post.social_network}}</p>
            </div>
        </div>
        <div class="post-image">
            <img :src="post.pic"/>
            <div class="post-caption">{{post.caption}}</div>
        </div>
        <div class="post-stat">
            <div class="post-stat-item">
                <p class="post-stat-title">post</p>
                <p>{{post.likes_number}}</p>
            </div>
            <div class="post-stat-item">
                <p class="post-stat-title">likes</p>
                <p>{{post.comments_number}}</p>
            </div>
        </div>
        <div class="post-func">
            <template v-if="this.type==='pending' || this.type==='approved'">
               <span @click="changeStatus('rejected')"> REJECT </span>
            </template>
            <template v-if="this.type==='pending' || this.type==='rejected'">
               <span  @click="changeStatus('approved')"> APPROVE </span>
            </template>
        </div>
    </div>
</template>
<script>
    export default  {
        name:'post',
        props:['post','type','array','index'],
        methods: {
            changeStatus(string) {
                this.post.status=string;
                this.$root.$emit('ChangeStat',this.post,string);
                 this.array[this.type].splice(this.index,1);

            }
        }
    }
</script>
<style lang="less">
    .post-item{
        width: 23%;
        margin:0px 10px ;
        .post-author {
            display: flex;
            align-items: center;
            .post-author-img {
                width: 20%;
                margin-right: 10px;
                img {
                    width: 100%;
                    border-radius: 50%;
                }
            }
            .post-author-info {
                text-align: left;
            }
        }
        .post-image {
            width: 100%;
            position: relative;
            img {
                width: 100%;
                display: block;
            }
            .post-caption {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0px;
                color:#fff;
                background: rgba(0,0,0,0.5);
                display: none;
            }
        }
        .post-image:hover .post-caption{
            display: block;
        }
        .post-stat {
            display: flex;
            justify-content: space-between;
            &-item {
                width: 50%;
                text-align: left;
                p {
                    font-weight: 600;
                    margin: 5px 0px;
                }
            }
            &-title {
                color: #d3d3d3;
                font-size: 12px;
                text-transform: uppercase;
            }
        }
        .post-func {
            display: flex;
            justify-content: space-between;
        }
    }
</style>