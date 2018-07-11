<template >
    <div v-if="!isHide" class="dashboard-item">
        <div class="dashboard-item-heder">
            <p>{{item.name}}</p>
            <p class="dashboard-item-type">{{item.type}}</p>
        </div>
        <div class="dashboard-item-body">
            <div>
                <span>approved post</span>
                <p>{{item.approved_posts}}</p>
            </div>
            <div>
                <span>likes</span>
                <p>{{item.approved_likes}}</p>
            </div>
            <div>
                <span>comments</span>
                <p>{{item.approved_comments}}</p>
            </div>
            <div>
                <span>influencer</span>
                <p>{{item.num_of_artists}}</p>
            </div>
            <p class="progress">{{item.progress}}% ({{item.days_passed}}/{{item.days_total}} days)</p>
        </div>
        <div class="dashboard-item-footer">
            <p class="dashboard-item-hide" @click="hideItem">HIDE</p>
            <p class="dashboard-item-show"><router-link :to="'/campaings/'+item.id">SHOW DETAILS</router-link></p>
        </div>
    </div>
</template>
<script>
    export default  {
        props:['item'],
        data(){
          return {
              isHide:false,
          }
        },
        methods: {
            hideItem() {
                this.isHide=true;
            }
        },
    }
</script>
<style lang="less">
    .dashboard-item {
        width: 20%;
        margin: 10px 20px;
        .dashboard-item-heder {
            border-top: 3px solid plum;
            text-align: left;
            border-bottom: 1px solid #d3d3d3;
            .dashboard-item-type {
                font-size: 10px;
                color:#d3d3d3;
            }
        }
        .dashboard-item-body {
            display: flex;
            flex-wrap: wrap;
            border-bottom: 3px solid darkseagreen;
            div {
                width: 50%;
                text-align: left;
                span {
                    color:#d3d3d3;
                    text-transform: uppercase;
                    font-size: 10px;
                }
                p {
                    margin: 0px;
                    font-weight: 600;
                }
            }
            .progress {
                font-size: 10px;
                color:#d3d3d3;
            }
        }
        .dashboard-item-footer {
            display: flex;
            justify-content: space-between;
            p{
                font-weight: 600;
                cursor: pointer;
            }
            .dashboard-item-show {
                color:#5ac5c6;
            }
        }
    }
</style>