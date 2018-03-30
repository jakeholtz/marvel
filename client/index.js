const app = new Vue({
  el: '#app',
  data: {
    currQuestion: null,
    currAnswers: [],
    submitted: false,
    finished: false,
    enlarged: false,
  },
  methods: {
    addQuestion: function(question) {
      this.currQuestion = question;
    },
    addAnswer: function(answer) {
      this.currAnswers.push(answer);
      return null;
    },
    triggerSubmit: function() {
      this.submitted = true;
    },
    triggerFinish: function() {
      this.finished = true;
      this.enlarged = true;
    },
    triggerReset: function() {
      this.currQuestion = null;
      this.currAnswers = [];
      this.submitted = false;
      this.finished = false;
      this.enlarged = false;
    },
  }
})
