namespace Script {
  import ƒ = FudgeCore;
  //import ƒAid = FudgeAid;

  ƒ.Debug.info("Main Program Template running!");

  let viewport: ƒ.Viewport;
  document.addEventListener("interactiveViewportStarted", <EventListener>start);
  let marioPos:ƒ.Node;

  function start(_event: CustomEvent): void {
    viewport = _event.detail;

    ƒ.Loop.addEventListener(ƒ.EVENT.LOOP_FRAME, update);
    ƒ.Loop.start();  // start the game loop to continously draw the viewport, update the audiosystem and drive the physics i/a
    console.log(viewport);
    let branch: ƒ.Node = viewport.getBranch();
    console.log(branch);
    marioPos= branch.getChildrenByName("Sprite")[0]; // get Sprite by name
    console.log("Mario",marioPos);
  }

  function update(_event: Event): void {
    // ƒ.Physics.simulate();  // if physics is included and used
    viewport.draw();
    ƒ.AudioManager.default.update();
    console.log("Update");
    // mtx = MAtrix 
    marioPos.getComponent(ƒ.ComponentTransform).mtxLocal.translateX(0.01);
  }
}