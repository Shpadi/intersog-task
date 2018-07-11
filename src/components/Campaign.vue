<template>
    <div class="Company">
        <h1><router-link to="/dashboard">Dashboard</router-link></h1>
        <p>{{getCompaniesInfo.name}}</p>
        <div class="Company-social">
            <vue-tabs active-tab-color="#9b59b6"
                      active-text-color="white"
                      @tab-change="handleTabChange">
                <v-tab  title="instagram">
                    <vue-tabs active-tab-color="#9b59b6"
                              active-text-color="white">
                        <v-tab title="pending">
                            <div class="filter">
                                <div class="filter-keyword">
                                    <template v-for="(item,index) in this.keyArr">
                                        <span class="filter-keyitem">{{item}}<img @click=deleteItem(index) src="../assets/cancel.png"/></span>
                                    </template>
                                </div>
                                <input @keyup.enter="addToKeyArr" v-model="key" placeholder="enter keyword and press enter"/>
                                <button @click="filterPosts('inst')">Filter</button>
                            </div>
                            <template v-for="(item,index) in getPostsInst.pending">

                                <post :post="item" type="pending" :array="getPostsInst" :index="index"></post>
                            </template>
                        </v-tab>
                        <v-tab title="approved">
                            <template v-for="(item,index) in getPostsInst.approved">
                                <post :post="item" type="approved" :array="getPostsInst" :index="index"></post>
                            </template>
                        </v-tab>
                        <v-tab title="rejected">
                            <template v-for="(item,index) in getPostsInst.rejected">
                                <post :post="item" type="rejected" :array="getPostsInst" :index="index"></post>
                            </template>
                        </v-tab>
                    </vue-tabs>
                </v-tab>

                <v-tab title="youtube">
                    <vue-tabs active-tab-color="#9b59b6"
                              active-text-color="white">
                        <v-tab title="pending">
                            <div class="filter">
                                <div class="filter-keyword">
                                    <template v-for="(item,index) in this.keyArr">
                                        <span class="filter-keyitem">{{item}}<img @click=deleteItem(index) src="../assets/cancel.png"/></span>
                                    </template>
                                </div>
                                <input @keyup.enter="addToKeyArr" v-model="key" placeholder="enter keyword and press enter"/>
                                <button @click="filterPosts('inst')">Filter</button>
                            </div>
                            <template v-for="(item,index) in getPostsYou.pending">

                                <post :post="item" type="pending" :array="getPostsInst" :index="index"></post>
                            </template>
                        </v-tab>
                        <v-tab title="approved">
                            <template v-for="(item,index) in getPostsYou.approved">
                                <post :post="item" type="approved" :array="getPostsInst" :index="index"></post>
                            </template>
                        </v-tab>
                        <v-tab title="rejected">
                            <template v-for="(item,index) in getPostsYou.rejected">
                                <post :post="item" type="rejected" :array="getPostsInst" :index="index"></post>
                            </template>
                        </v-tab>
                    </vue-tabs>
                </v-tab>

                <v-tab title="Facebook">
                    <vue-tabs active-tab-color="#9b59b6"
                              active-text-color="white">
                        <v-tab title="pending">
                            <div class="filter">
                                <div class="filter-keyword">
                                    <template v-for="(item,index) in this.keyArr">
                                        <span class="filter-keyitem">{{item}}<img @click=deleteItem(index) src="../assets/cancel.png"/></span>
                                    </template>
                                </div>
                                <input @keyup.enter="addToKeyArr" v-model="key" placeholder="enter keyword and press enter"/>
                                <button @click="filterPosts('inst')">Filter</button>
                            </div>
                            <template v-for="(item,index) in getPostsFace.pending">

                                <post :post="item" type="pending" :array="getPostsInst" :index="index"></post>
                            </template>
                        </v-tab>
                        <v-tab title="approved">
                            <template v-for="(item,index) in getPostsFace.approved">
                                <post :post="item" type="approved" :array="getPostsInst" :index="index"></post>
                            </template>
                        </v-tab>
                        <v-tab title="rejected">
                            <template v-for="(item,index) in getPostsFace.rejected">
                                <post :post="item" type="rejected" :array="getPostsInst" :index="index"></post>
                            </template>
                        </v-tab>
                    </vue-tabs>
                </v-tab>
                <v-tab title="Twitter">
                    <vue-tabs active-tab-color="#9b59b6"
                              active-text-color="white">
                        <v-tab title="pending">
                            <div class="filter">
                                <div class="filter-keyword">
                                    <template v-for="(item,index) in this.keyArr">
                                        <span class="filter-keyitem">{{item}}<img @click=deleteItem(index) src="../assets/cancel.png"/></span>
                                    </template>
                                </div>
                                <input @keyup.enter="addToKeyArr" v-model="key" placeholder="enter keyword and press enter"/>
                                <button @click="filterPosts('inst')">Filter</button>
                            </div>
                            <template v-for="(item,index) in getPostsTwit.pending">

                                <post :post="item" type="pending" :array="getPostsInst" :index="index"></post>
                            </template>
                        </v-tab>
                        <v-tab title="approved">
                            <template v-for="(item,index) in getPostsTwit.approved">
                                <post :post="item" type="approved" :array="getPostsInst" :index="index"></post>
                            </template>
                        </v-tab>
                        <v-tab title="rejected">
                            <template v-for="(item,index) in getPostsTwit.rejected">
                                <post :post="item" type="rejected" :array="getPostsInst" :index="index"></post>
                            </template>
                        </v-tab>
                    </vue-tabs>
                </v-tab>
            </vue-tabs>
        </div>
    </div>
</template>
<script>
    import Vue from 'vue'
    import post from './post/post'
    import Chip from 'vue-chip'

    Vue.component('post',post);
    export default  {
        components: { Chip },
        data() {
          return {
              tabIndexActive:0,
              keyArr:[],
              key:'',
              base:{
                  inst:[],
                  face:[],
                  twitter:[],
                  youtube:[],
              },
              filterCount:0,
          }
        },
        computed: {
            getCompaniesInfo() {
                this.baseInst=window.storeCampaings.getters.getSoloCompanyInfo;
                return window.storeCampaings.getters.getSoloCompanyInfo;
            },
            getPostsInst() {
                return window.storePosts.getters.getPostsInst;
            },
            getPostsFace() {
                return window.storePosts.getters.getPostsFace;
            },
            getPostsTwit() {
                return window.storePosts.getters.getPostsTwit;
            },
            getPostsYou() {
                return window.storePosts.getters.getPostsYou;
            },
        },
        mounted() {
            window.storeCampaings.dispatch('LOAD_COMPANIES_INFO');
            window.storePosts.dispatch('LOAD_POST_INFO');
            this.$root.$on('ChangeStat',(post,string)=>{
                this.getPostsInst[string].push(post);
            });
        },
        methods:{
            addToKeyArr() {
                if (this.keyArr.indexOf(this.key)===-1) {
                    this.keyArr.push(this.key);
                    this.key='';
                }


            },
            handleTabChange(tabIndex) {
               this.tabIndexActive=tabIndex;
            },
            filterPosts(type){
                let arr=[];
                if (this.filterCount==0){
                    this.base.inst=this.getPostsInst.pending;
                    this.base.face=this.getPostsFace.pending;
                    this.base.twitter=this.getPostsTwit.pending;
                    this.base.youtube=this.getPostsYou.pending;

                }
                this.filterCount++;
                if (this.keyArr.length) {
                    this.base[type].map((item)=>{
                       for (let i=0; i<this.keyArr.length; i++) {
                           if (item.caption.indexOf(this.keyArr[i])!==-1) {
                               arr.push(item);
                               break;
                           }
                       }
                    });
                    switch (this.tabIndexActive) {
                        case 0:
                            this.getPostsInst.pending=arr;
                            break;
                        case 1:
                            this.getPostsYou.pending=arr;
                            break;
                        case 2:
                            this.getPostsTwit.pending=arr;
                            break;
                        case 3:
                            this.getPostsFace.pending=arr;
                            break;
                    }

                }
                else {
                    switch (this.tabIndexActive) {
                        case 0:
                            this.getPostsInst.pending=this.base[type];
                            break;
                        case 1:
                            this.getPostsYou.pending=this.base[type];
                            break;
                        case 2:
                            this.getPostsTwit.pending=this.base[type];
                            break;
                        case 3:
                            this.getPostsFace.pending=this.base[type];
                            break;
                    }
                }


            },
            deleteItem(index) {
                this.keyArr.splice(index,1);
            }
        }

    }
</script>
<style lang="less">
    .filter {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .filter-keyword{
            width: 60%;
            display: flex;
        }
        .filter-keyitem {
            display: flex;
            align-items: center;
            margin:0px 5px ;
            img {
                width: 20px;
            }
        }
        input {
            width: 20%;
            padding: 10px;
            border: 1px solid #d3d3d3;
            border-radius: 5px;
        }
        button {
            color: #fff;
            width: 10%;
            text-align: center;
            padding: 10px 0px;
            border-radius: 5px;
            border:0px;
            background: #5ac5c6;
        }
    }
    .vue-tabs .nav-tabs>li>a {
        margin-right: 2px;
        line-height: 1.42857;
        color: #000;
        border: 1px solid transparent;
        border-radius: 4px;
        text-decoration: none;
        padding:10px 20px;
    }

    .tab-container {
        display: flex;
        flex-wrap: wrap;
    }

    .vue-tabs{
        width: 100%;
    }

    .nav-tabs-navigation {
        text-align: center;
    }
</style>