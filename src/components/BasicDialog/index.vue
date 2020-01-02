<template>
    <el-dialog
        class="basic-dialog"
        :visible="visible"
        :title="title"
        :width="realWidth"
        :append-to-body="appendToBody"
        @close="handleClose"
        @closed="handleClosed"
    >
        <el-scrollbar class="scrollbar--bd" wrap-class="scrollbar__wrap--bd" view-class="scrollbar__view--bd">
            <slot></slot>
        </el-scrollbar>
        <div slot="footer"
             class="basic-dialog-ft"
             v-if="showFt"
        >
            <slot name="ft">
                <el-button @click="handleClose">取消</el-button>
                <el-button type="primary" @click="handleOk">保存</el-button>
            </slot>
        </div>
    </el-dialog>
</template>

<script>
export default {
    props: {
        visible: Boolean,
        width: {
            type: [ Number, String ],
            default: 802
        },
        title: String,
        menus: {
            type: Array,
            default () {
                return []
            }
        },
        showFt: {
            type: Boolean,
            default: true
        },
        appendToBody: {
            type: Boolean,
            default: false
        },
        updateVis: {
            type: Function,
            default: () => {}
        },
        handleClose: {
            type: Function,
            default: () => {}
        },
        handleClosed: {
            type: Function,
            default: () => {}
        },
        handleOk: {
            type: Function,
            default: () => {}
        }
    },
    computed: {
        realWidth () {
            if (typeof this.width === 'number') {
                return this.width + 'px'
            } else {
                return this.width
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.basic-dialog {
    /deep/ .el-dialog__body {
        padding: 0;
    }

    /deep/ .entity-dlg__block-hd {
        margin-bottom: 30px;
    }
    /deep/ .entity-dlg__hd-line {
        display: inline-block;
        margin-right: 10px;
        width: 4px;
        height: 16px;
        border-radius: 4px;
        vertical-align: middle;
        background: #4186f6;
    }
    /deep/ .entity-dlg__hd-title {
        color: #3f4656;
    }
}
.scrollbar--bd {
    /deep/ .scrollbar__wrap--bd {
        //max-height: 417px;
        max-height: 719px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    /deep/ .scrollbar__view--bd {
        padding: 30px;
    }
}
</style>
