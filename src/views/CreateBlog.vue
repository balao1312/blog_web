<template>
  <div>
  <CModal centered :show.sync="showDone" color="dark">
        <template v-slot:header> 訊息 </template>
        匯入完成！
        <template v-slot:footer>
          <CButton
            size="lg"
            color="info"
            @click="
              showDone = false;
              cleanData();
            "
          >
            OK !
          </CButton>
        </template>
      </CModal>
  <form>
    <div class="mb-3">
      <label for="formGroupExampleInput">泥速隨</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput"
        placeholder="請輸入您的大名"
		v-model="author"
      />
    </div>
    <div class="mb-3">
      <label for="formGroupExampleInput2">標題是什麼</label>
      <input
        type="text"
        class="form-control"
        id="formGroupExampleInput2"
        placeholder="標題不要亂殺人"
		v-model="title"
      />
    </div>
	<div class="mb-3">
      <label for="formGroupExampleInput2">有什麼話快說</label>
      <textarea
        class="form-control"
        id="formGroupExampleInput3"
        placeholder="嗯嗯我想想"
		rows="8"
		v-model="content"
      />
    </div>
	<div style="float: right">
	<CButton
          size="lg"
          color="info"
          @click="sendData()"
          class="modal_footer_btn"
        >
          確認
        </CButton>
        <CButton
          size="lg"
          color="secondary"
          @click="cleanData()"
          class="modal_footer_btn"
        >
          清除
        </CButton>
	</div>
  </form>
  </div>
</template>

<script>
import "@babel/polyfill";

export default {
  name: "createblog",
  inject: ["API_URL"],

  data() {
    return {
      author: "",
      title: "",
      content: "",
	  showDone: false
    };
  },

  created() {
  },

  methods: {
    async sendData() {
      console.log("try sending ...");
	  let param = {
		  author: this.author,
		  title: this.title,
		  content: this.content
	  }
	  console.log(param)
      await this.$http.post(`${this.API_URL}/blog`, param).then((res) => {
        console.log("data sent")
		this.showDone = true
      });
    },

    cleanData() {
		this.author = ''
		this.title = ''
		this.content = ''
	}
  },
};
</script>

<style>
/* .center {
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
  font-size: 20px;
} */
</style>
