/**
 * basicZombie.js
 *
 * A Basic Zombie is a type of monster.  It has the simplest of minds.
 */

$(function () {
  ktah.types.BasicZombie = ktah.types.Monster.extend({
    initialize: function(attributes, options) {
      this.sceneNode = options.sceneNode.createClone(options.scene.getRootSceneNode());

      this.type = 'basicZombie';
      this.health = 100;

      this.sceneNode.Pos.Y = 1.3;
      this.sceneNode.Pos.X = this.posX = attributes.posX;
      this.sceneNode.Pos.Z = this.posZ = attributes.posZ;

      // TODO: Will eventually be refactored to allow different monster types to share code.

      $.ajax({
        type: 'POST',
        url: '/monsters/' + options.gameId,
        data: JSON.stringify({
          type: this.type,
          id: null,
          health: this.health,
          posX: this.sceneNode.Pos.X,
          posZ: this.sceneNode.Pos.Z
        }),
        error: function (jqXHR, textStatus, errorThrown) {
          console.log(jqXHR);
          console.log(textStatus);
          console.log(errorThrown);
        },
        success: function (data, textStatus, jqXHR) {
          this.id = data.monsterId;
          console.log("monster id: " + this.id);
        },
        dataType: 'json',
        contentType: 'application/json'
      });
    }
  });
});
