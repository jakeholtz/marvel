const app = new Vue({
  el: '#app',
  data: {
    currQuestion: null,
    currAnswers: [],
    submitted: false,
    finished: false,
  },
  methods: {
    addQuestion: function(question) {
      this.currQuestion = question;
    },
    addAnswer: function(answer) {
      this.currAnswers.push(answer);
      // app.$el.children[1].children[0].children[2].children[1].children[0].value = "Type answer here"
    },
    triggerSubmit: function() {
      this.submitted = true;
    },
    triggerFinish: function() {
      this.finished = true;
    },
    triggerReset: function() {
      this.currQuestion = null;
      this.currAnswers = [];
      this.submitted = false;
      this.finished = false;
    },
  }
})

// function addQuestions(ques)