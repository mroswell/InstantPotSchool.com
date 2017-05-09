// /* ONLY HTML & CSS - NO JAVASCRIPT */
// $('input[type="checkbox"]').click(function(event) {
//   // this.checked = false; // reset first
//   return false;
//   event.preventDefault();
//   event.stopPropagation();
//   // event.stopPropagation() like in Zoltan's answer would also spare some
//   // handler execution time, but is no more needed here
//
//   // then do the heavy processing:
//   alert('Break');
// });


function toggleChevron(e) {
  $(e.target)
    .prev('.panel-heading')
    .find("i.indicator")
    .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);

new Vue({
  el: '#accordion',
  data: {
    objectives: [
      {
        id: "acquire",
        goal: "Acquire an Instant Pot",
        detail: "You can purchase an Instant Pot from three websites: \<a target=\"_blank\" href=\"https://www.amazon.com/s/ref=nb_sb_noss_1?url=search-alias%3Daps&field-keywords=instant+pot\"\>amazon.com\<\/a\>, \<a  target=\"_blank\" href=\"https://www.walmart.com/search/?query=instant%20pot\"\>walmart.com\<\/a\>, and \<a target=\"_blank\" href=\"http://www.instantpot.com/\"\>InstantPot.com\<\/a\>. For most people the IP-DUO60 is the ideal purchase. The LUX models, while cheaper, don\'t have a holding slot for the removed lid, and also lack the Yogurt setting. \(Soy yogurt is one of the easiest things to make in the Instant Pot.\)",
        author: "InstantPotSchool",
        section: "Getting Started"
      },

      {
        id: "open",
      goal: "Open the box",
      detail: "For many people this is the hardest step! Here is a one-minute video to help get you over the hump.       <div class=\"video-container\"><iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/CGkYrRrNhgc\" frameborder=\"0\" allowfullscreen><\/iframe> </div>",
      author: "InstantPotSchool",
      section: "Getting Started"
    },
      {
        id:"cleaning",
        goal: "Understand what parts need to be cleaned",
        detail: "Clean the liner pot after each use (hand-wash, or dishwasher). Clean the condensation cup when you notice that it has liquid in it. (q-tip, soap, and water). Clean the pot outer surface when you need it to look good for company (sponge). Clean the top when (this is probably the trickiest thing to clean. some combination of a sponge, or q-tip, or towel will help. Clean antiblock when you notice it has \"schmutz\" on it. Clean the O-ring occasionally.",
        author: "InstantPotSchool",
        section: "Getting Started"
      },
      {
        id: "tens",
        goal: "Understand the 10-second, and 10-minute waiting periods",
        detail: "After you set the time, there will be a 10-second delay before the pot will display &ldquo;ON.&rdquo; People often wonder during that period, if they did something wrong, but the IP is just giving you a chance to change the time setting if you wish. So just count to ten in your favorite language, and the first waiting period will be complete, signalled by three beeps.\<p\>This also marks the beginning of the second waiting period, while the pot comes up to pressure. The second wait time will vary depending on ingredients, but it will generally be at least 10 minutes. So if you set the Manual button to 7 minutes, count on at least a 20-minute recipe (7 countdown minutes, \+ the preliminary 10 minutes to come up to pressure \+ some additional time for the pressure to release, and the food to be cool enough to eat.",
        author: "InstantPotSchool",
        section: "Getting Started"
      },
      {
        id: "safe",
        goal: "Ensure Safe Quick Pressure Release",
        detail: "The Instant Pot has many safety features built into it. There are two serious cautions: when you release the valve \(for recipes that call for Quick Pressure Release\) Take care NOT to have your hands near the extremely hot steam. Release the valve with a long metal utensil or a mitt. Also, don't play \"Oh, it\'s a spa steamer.\" In other words: Keep your hands and face away from the steam as it's released",
        author: "InstantPotSchool",
        section: "Getting Started"
      }
    ],



    name: 'Marjorie',
    age: 100,
    image: 'https://thumbs.dreamstime.com/x/closeup-blossoming-cherry-trees-sunny-spring-day-apple-85820128.jpg'
  },
  methods: {
    timesThree: function () {
      return this.age * 3;
    },
    randomFloat: function () {
      return Math.random();
    }
  }
});