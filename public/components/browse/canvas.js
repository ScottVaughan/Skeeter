$(document).ready(function () {
  init();
});

// CANVAS DEMO ----------------------------------------------------------------

var displayData = true;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var cursor = [];
var mouseDragStart = [];
var mouseDragEnd = [];
var w_center = [0, 0];
var w_dragStartOrigin = [];
var pan = [0, 0];
var panels = [];
var state = 'SELECT';
var default_avatar = new Image();
var background = new Image();
var dragged = false;

function init() {
  default_avatar.src = 'assets/images/Default_Avatar.jpg';
  background.src = 'assets/images/backgrounds/pattern006-dark.png';

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  addMouseEventListeners();
  render();
}
// UTILITY --------------------------------------------------------------------
function viewToWorld(pt, origin) {
  var t = new AffineTransform(1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
  t.translate(-origin[0], -origin[1]);
  var npt = [];
  t = t.createInverse();
  t.transform(pt, 0, npt, 0, 1);
  return npt;
}
function worldToView(pt, origin) {
  var t = new AffineTransform(1, 0, 0, 1, canvas.width / 2, canvas.height / 2);
  t.translate(-origin[0], -origin[1]);
  var npt = [];
  t.transform(pt, 0, npt, 0, 1);
  return npt;
}

// MOUSE HANDLERS -------------------------------------------------------------
function addMouseEventListeners() {
  canvas.addEventListener('mouseup', mouseUp);
  canvas.addEventListener('click', mouseClick);
  canvas.addEventListener('mousedown', mouseDown);
  canvas.addEventListener('mousemove', mouseMove);
  canvas.addEventListener('mouseleave', mouseLeave);
  canvas.addEventListener('mousewheel', mouseWheel);
}
function mouseWheel(e) {
  alert(e);
}
function mouseMove(e) {
  cursor[0] = e.clientX;
  cursor[1] = e.clientY;
  if (state == 'MOUSE_DOWN') {
    if (isDragging()) {
      doDrag(e);
    }
  } else if (state == 'DRAG') {
    doDrag(e);
  }
}
function mouseDown(e) {
  state = 'MOUSE_DOWN';
  mouseDragStart = viewToWorld(cursor, w_center).slice(0);
  w_dragStartOrigin = w_center.slice(0);
}
function mouseUp(e) {
  if (state == 'MOUSE_DOWN') {
    if (isTagSelected()) {
      doSelect();
    }
  }
  state = 'SELECT';
}
function mouseClick(e) {
  if (dragged || state != 'SELECT') {
    dragged = false;
  } else {
    createTag();
  }
}
function mouseLeave(e) {
  if (state == 'DRAG') {
    doDrag(e);
    state = 'SELECT';
  }
}

// CONTROLLER -----------------------------------------------------------------
function createTag() {

  var p = new Tag(mouseDragStart[0], mouseDragStart[1], 'gray');

  panels.push(p);
  p.draw();
}
function isTagSelected() {
  // TODO
  return false;
}
function isDragging() {
  if (state = 'MOUSE_DOWN') {
    dragged = true;
    state = 'DRAG';
  }
  return dragged;
}
function doSelect() {
  // TODO
}
function doDrag(e) {
  mouseDragEnd = viewToWorld(cursor, w_dragStartOrigin);
  pan[0] = mouseDragEnd[0] - mouseDragStart[0];
  pan[1] = mouseDragEnd[1] - mouseDragStart[1];

  var dx = mouseDragEnd[0] - mouseDragStart[0];
  var dy = mouseDragEnd[1] - mouseDragStart[1];

  w_center[0] = w_dragStartOrigin[0] - dx;
  w_center[1] = w_dragStartOrigin[1] - dy;
}

// VIEW -----------------------------------------------------------------------
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  var pattern = ctx.createPattern(background, 'repeat');

  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = pattern;
  ctx.fill();

  renderTags();
  renderData();
  requestAnimationFrame(render);
}
function renderTags() {
  for (var p in panels) {
    panels[p].render(ctx);
  }
}
function renderData() {
  if (displayData) {
    var view = 'View Coord: (' + cursor + ')';
    var world_center = 'World Center: (' + w_center + ')';
    var panel_count = '# of Tags: ' + panels.length;

    ctx.strokeStyle = '#2E9AFE';
    ctx.strokeText(state, 12, 24);
    ctx.strokeText(view, canvas.width - ctx.measureText(view).width - 12, 24);
    ctx.strokeText(world_center, canvas.width - ctx.measureText(world_center).width - 12, 36);
    ctx.strokeText(panel_count, canvas.width - ctx.measureText(panel_count).width - 12, 48);
  }
}

// TAG ----------------------------------------------------------------------
function Tag(x, y, color) {
  this.color = color;
  this.width = 220;
  this.height = 160;
  this.center = [x, y];
  // this.center = [ x - this.width / 2, y - this.height / 2 ];
  this.buffer = document.createElement('canvas');
  this.ctx = this.buffer.getContext('2d');
  this.buffer.width = this.width;
  this.buffer.height = this.height;
}
Tag.prototype.cleanCanvas = function () {
  this.ctx.clearRect(0, 0, this.width, this.height);
};
Tag.prototype.draw = function () {
  this.cleanCanvas();
  this.ctx.strokeStyle = '#303030';
  this.ctx.lineWidth = 4;
  this.ctx.rect(8, 8, this.width - 10, this.height - 10);
  this.ctx.stroke();
  this.ctx.fillStyle = this.color;
  this.ctx.fillRect(10, 10, this.width - 14, this.height - 14);
  this.ctx.rect(2, 2, default_avatar.width + 4, default_avatar.height + 4);
  this.ctx.stroke();
  this.ctx.drawImage(default_avatar, 4, 4);
};
Tag.prototype.render = function (context) {
  var pt = worldToView(this.center, w_center);
  context.drawImage(this.buffer, pt[0], pt[1]);
};
Tag.prototype.contains = function () {};

// AFFINE TRANSFORM -----------------------------------------------------------
AffineTransform = function (opt_m00, opt_m10, opt_m01, opt_m11, opt_m02, opt_m12) {
  if (arguments.length == 6) {
    this.setTransform(opt_m00, opt_m10, opt_m01, opt_m11, opt_m02, opt_m12);
  } else if (arguments.length != 0) {
    throw Error('Insufficient matrix parameters');
  } else {
    this.m00_ = this.m11_ = 1;
    this.m10_ = this.m01_ = this.m02_ = this.m12_ = 0;
  }
};
AffineTransform.prototype.setTransform = function (m00, m10, m01, m11, m02, m12) {
  this.m00_ = m00;
  this.m10_ = m10;
  this.m01_ = m01;
  this.m11_ = m11;
  this.m02_ = m02;
  this.m12_ = m12;
  return this;
};
AffineTransform.prototype.scale = function (sx, sy) {
  this.m00_ *= sx;
  this.m10_ *= sx;
  this.m01_ *= sy;
  this.m11_ *= sy;
  return this;
};
AffineTransform.prototype.translate = function (dx, dy) {
  this.m02_ += dx * this.m00_ + dy * this.m01_;
  this.m12_ += dx * this.m10_ + dy * this.m11_;
  return this;
};
AffineTransform.prototype.toString = function () {
  return 'matrix(' + [this.m00_, this.m10_, this.m01_, this.m11_, this.m02_, this.m12_].join(',') + ')';
};
AffineTransform.prototype.concatenate = function (tx) {
  var m0 = this.m00_;
  var m1 = this.m01_;
  this.m00_ = tx.m00_ * m0 + tx.m10_ * m1;
  this.m01_ = tx.m01_ * m0 + tx.m11_ * m1;
  this.m02_ += tx.m02_ * m0 + tx.m12_ * m1;

  m0 = this.m10_;
  m1 = this.m11_;
  this.m10_ = tx.m00_ * m0 + tx.m10_ * m1;
  this.m11_ = tx.m01_ * m0 + tx.m11_ * m1;
  this.m12_ += tx.m02_ * m0 + tx.m12_ * m1;
  return this;
};
AffineTransform.prototype.transform = function (src, srcOff, dst, dstOff, numPts) {
  var i = srcOff;
  var j = dstOff;
  var srcEnd = srcOff + 2 * numPts;
  while (i < srcEnd) {
    var x = src[i++];
    var y = src[i++];
    dst[j++] = x * this.m00_ + y * this.m01_ + this.m02_;
    dst[j++] = x * this.m10_ + y * this.m11_ + this.m12_;
  }
};
AffineTransform.prototype.createInverse = function () {
  var det = this.getDeterminant();
  return new AffineTransform(this.m11_ / det, -this.m10_ / det, -this.m01_ / det, this.m00_ / det, (this.m01_ * this.m12_ - this.m11_ * this.m02_) / det, (this.m10_ * this.m02_ - this.m00_ * this.m12_) / det);
};
AffineTransform.prototype.getDeterminant = function () {
  return this.m00_ * this.m11_ - this.m01_ * this.m10_;
};