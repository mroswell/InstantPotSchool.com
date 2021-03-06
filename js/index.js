
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
        id: "tens",
        goal: "Understand the 10-second and 10-minute waiting periods",
        detail: "After setting the time, there is a 10-second delay before the pot displays &ldquo;ON.&rdquo; During this delay, people often wonder if they did something wrong, but the Instant Pot is just offering a chance to further change the time. The 10-second waiting period completes with a signal of three beeps.\<p\>This is followed by a preheating period, while the pot comes up to pressure. The preheat time period will vary depending on ingredients, but it will generally be at least 10 minutes. So if a recipe calls for 5 minutes on the Manual setting, count on at least 25 minutes before eating \<ul\> \<li\>10 seconds from the time you set the time\</li\> <li\>10 - 20 minutes while coming up to pressure (depending on liquid level) </li\><li\>15 minutes for the pressure to release and the food to be cool enough to eat.\</li\>)",
        author: "InstantPotSchool",
        section: "Getting Started"
      },
      {
      id: "steaming",
        goal: "Relax about a little steam emitted during the preheating period",
        detail: "Steam may release from the valve for a few minutes as the Instant Pot comes up to pressure. This is normal. If the pot continues to steam after the button has risen, consider contacting the manufacturer about getting a replacement. \(Even so, this may not be a problem if your recipe has a lot of liquid.\)",
        author: "InstantPotSchool",
        section: "Getting started"
      },
      {
        id: "safe",
        goal: "Ensure safe Quick Pressure Release (QPR)",
        detail: "The Instant Pot has many safety features built into it. There are two serious cautions: when you release the valve \(for recipes that call for Quick Pressure Release\) take care NOT to have your hands near the extremely hot steam. Release the valve with a long metal utensil or a mitt. Also, don't play &ldquo;Oh, it\'s a spa steamer.&rdquo; In essence: Keep your hands and face away from the steam as it&lsquo;s released",
        author: "InstantPotSchool",
        section: "Getting Started"
      },
            {
        id:"cleaning",
        goal: "Understand what parts need to be cleaned",
        detail: "Clean the liner pot after each use (hand-wash, or dishwasher). Clean the condensation cup when you notice that it has liquid in it. (q-tip, soap, and water). Clean the pot outer surface when you need it to look good for company (sponge). Clean the top when (this is probably the trickiest thing to clean. some combination of a sponge, or q-tip, or towel will help. Clean antiblock when you notice it has \"schmutz\" on it. Clean the sealing ring occasionally.",
        author: "InstantPotSchool",
        section: "Getting Started"
      },
      {
        id: "toggle_pressure",
        goal: "Toggle to low pressure while steaming",
        detail: "The Pressure key toggles between High Pressure and Low Pressure for the pressure cooking functions. This is especially helpful when steaming vegetables. To steam broccoli: Use a half-cup of water, then press Stream, Pressure, and the minus button down to zero. (Even with a setting of zero minutes and low pressure it will take some time before coming to pressure.",
        author: "InstantPotSchool",
        section: "Getting Comfortable"
      },
        {
        id: "lid",
        goal: "Use the lid holder and spoon holder",
        detail: "",
        author: "InstantPotSchool",
        section: "Getting Comfortable"
      },
      {
        id: "social",
        goal: "Get to know the acronyms",
        detail: "IP, QR, QPR, NR, NPR",
        author: "InstantPotSchool",
        section: "Getting Comfortable"
      },
            {
        id: "social_norms",
        goal: "Post appropriate questions on Instant Pot forums",
        detail: "If you join a \"nutritarian\" Facebook group, make sure you have read the book \<i\>Eat to Live\<\\i\> before posting. If you join an Indian Instant Pot group, don\'t complain about ghee. In other words, get to know the community norms before posting.",
        author: "InstantPotSchool",
        section: "Getting Comfortable"
      },
      
    ]

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
