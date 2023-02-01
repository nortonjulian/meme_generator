describe("Meme test (with setup and tear-down)", function() {
    beforeEach(function () {
        document.querySelector("#imageURL").value = ''
        document.querySelector("#topText").value = ''
        document.querySelector("#bottomText").value = ''
    });

    it('When the page loads it shows inputs()', function () {

      let inputDivs = document.querySelectorAll('.form-input');

      expect(inputDivs.length).toEqual(3);
    });

    it('When addMeme button is clicked the meme is added to page()', function () {
        Submit()
        let memes = document.querySelectorAll('.meme');

        expect(memes.length).toEqual(1);
      });
      
    afterEach(function() {

    });
  });
