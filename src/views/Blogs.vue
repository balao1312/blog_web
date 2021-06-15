<template>
  <div>
    <CRow>
      <CCol v-for="blog in blogs" :key="blog.pk" lg="12" md="12" sm="12">
        <CCard>
          <CCardHeader color="dark">
            <div class="title">{{ blog.title }}</div>
            <div class="time">{{ datetime_to_string(blog.m_time) }}</div>
            <div class="author">{{ blog.author }} @</div>
          </CCardHeader>
          <CCardBody color="white">
            <div class="content">{{ blog.content }}</div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import "@babel/polyfill";

export default {
  name: "blogs",
  inject: ["API_URL"],

  data() {
    return {
      blogs: [],
    };
  },

  created() {
    this.getData();
  },

  methods: {
    async getData() {
      console.log("fetching ...");
      await this.$http.get(`${this.API_URL}/blog`).then((res) => {
        console.log("done fetching ...");
        this.blogs = res.data;
        // console.log(this.articles)
      });
    },
    datetime_to_string(datetime) {
      let dd = new Date(datetime);
      let str =
        dd.getFullYear().toString() +
        "-" +
        (dd.getMonth() + 1).toString() +
        "-" +
        dd.getDate() +
        " " +
        dd.getHours() +
        ":" +
        dd.getMinutes() +
        ":" +
        dd.getSeconds();
      return str;
    },
  },
};
</script>

<style>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: auto;
}
.title {
  float: left;
  color: white;
  font-size: 24px;
  margin: auto;
}
.time {
  position: relative;
  float: right;
  color: white;
  font-size: 18px;
  top: 6px;
}
.author {
  position: relative;
  float: right;
  color: white;
  font-size: 18px;
  right: 10px;
  top: 6px;
}
.content {
  font-size: 16px;
}
</style>
