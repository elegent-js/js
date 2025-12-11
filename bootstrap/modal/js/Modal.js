(function (global, $) {

  function Modal() {}

  Modal._modal = null

  /** 创建 modal DOM */
  Modal._create = function () {
    if (this._modal) return

    var html = `
      <div class="modal fade" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
              <h4 class="modal-title"></h4>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    `

    this._modal = $(html).appendTo('body')
  }

  /** 显示 modal */
  Modal.show = function (options) {
    options = options || {}
    this._create()

    var modal = this._modal

    // 动画开关
    modal.toggleClass('fade', options.animation !== false)
    
    var dialog = modal.find('.modal-dialog')
    var body = modal.find('.modal-body')
    var footer = modal.find('.modal-footer')

    // size
    dialog.removeClass('modal-sm modal-lg')
    if (options.size) {
      dialog.addClass(options.size) // modal-sm | modal-lg
    }

    // title
    modal.find('.modal-title').html(options.title || '')

    // content
    body.empty()
    if (options.template) {
      body.html($(options.template).html())
    } else if (options.content instanceof $) {
      body.append(options.content)
    } else {
      body.html(options.content || '')
    }

    // footer buttons
    footer.empty()
    ;(options.buttons || []).forEach(function (btn) {
      var $btn = $('<button type="button" class="btn"></button>')
        .addClass(btn.class || 'btn-default')
        .text(btn.text || '按钮')
        .on('click', function () {
          btn.onClick && btn.onClick(Modal)
        })
      footer.append($btn)
    })

    if (typeof options.onMounted === 'function') {
        modal.one('shown.bs.modal', function () {
        options.onMounted.call(Modal, modal, Modal)
        })
    }

    if (options.onHide) {
      modal.one('hidden.bs.modal', options.onHide)
    }

    modal.modal({
      backdrop: options.backdrop !== false,
      keyboard: options.keyboard !== false
    })
  }

  Modal.hide = function () {
    this._modal && this._modal.modal('hide')
  }

  /** alert */
  Modal.alert = function (content, title) {
    this.show({
      title: title || '提示',
      content: content,
      buttons: [
        {
          text: '确定',
          class: 'btn-primary',
          onClick: function () {
            Modal.hide()
          }
        }
      ]
    })
  }

  /** confirm */
  Modal.confirm = function (options) {
    this.show({
      title: options.title || '确认',
      content: options.content || '',
      buttons: [
        {
          text: '取消',
          class: 'btn-default',
          onClick: function () {
            options.onCancel && options.onCancel()
            Modal.hide()
          }
        },
        {
          text: '确定',
          class: 'btn-danger',
          onClick: function () {
            options.onOk && options.onOk()
            Modal.hide()
          }
        }
      ]
    })
  }

  global.Modal = Modal

})(window, jQuery)