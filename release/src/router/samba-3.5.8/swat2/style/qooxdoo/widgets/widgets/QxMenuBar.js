/* Copyright (c): 2002-2005 (Germany): United Internet, 1&1, GMX, Schlund+Partner, Alturo */
function QxMenuBar(){QxWidget.call(this);this.addEventListener("keydown",this._g4);};QxMenuBar.extend(QxWidget,"QxMenuBar");QxMenuBar.addProperty({name:"menu",type:Object});proto._modifyMenu=function(_b1,_b2,_b3,_b4){if(_b2){_b2.getOpener().setState("normal",_b4);_b2.setVisible(false,_b4);};if(_b1){var vOpener=_b1.getOpener();_b1.setLeft(vOpener.getComputedPageBoxLeft(),_b4);_b1.setTop(vOpener.getComputedPageBoxBottom(),_b4);_b1.setVisible(true,_b4);};return true;};proto._g4=function(e){switch(e.getKeyCode()){case QxKeyEvent.keys.left:this._g4_left(e);break;case QxKeyEvent.keys.right:this._g4_right(e);break;};};proto._g4_left=function(e){var vMenu=this.getMenu();if(!vMenu){return;};var vOpener=vMenu.getOpener();if(!vOpener){return;};var vPrev=vOpener?vOpener.isFirstChild()?this.getLastActiveChild():vOpener.getPreviousActiveSibling():this.getLastActiveChild();vPrev.setState("pressed");var vPrevMenu=vPrev.getMenu();if(vPrevMenu){var vPrevFirst=vPrevMenu.getFirstActiveChild();if(vPrevFirst){vPrevMenu.setHoverItem(vPrevFirst);};};};proto._g4_right=function(e){var vMenu=this.getMenu();if(!vMenu){return;};var vOpener=vMenu.getOpener();if(!vOpener){return;};var vNext=vOpener?vOpener.isLastChild()?this.getFirstActiveChild():vOpener.getNextActiveSibling():this.getFirstActiveChild();vNext.setState("pressed");var vNextMenu=vNext.getMenu();if(vNextMenu){var vNextFirst=vNextMenu.getFirstActiveChild();if(vNextFirst){vNextMenu.setHoverItem(vNextFirst);};};};proto.dispose=function(){if(this.getDisposed()){return;};this.removeEventListener("keydown",this._g4);return QxWidget.prototype.dispose.call(this);};