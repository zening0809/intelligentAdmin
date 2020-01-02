
import BasicDialog from '@component/BasicDialog'

const ACTIONS = {
    add: '新建',
    view: '查看',
    edit: '编辑'
}

export default {
    components: {
        BasicDialog
    },
    props: {
        moduleName: String,
        visible: {
            type: Boolean,
            default: false
        },
        // add | view | edit
        action: {
            type: String,
            default: 'add'
        },
        entity: {
            type: Object,
            default () {
                return {}
            }
        },
        updateVis: {
            type: Function,
            default: () => {}
        },
        updateState: {
            type: Function,
            default: () => {}
        },
        queryList: {
            type: Function,
            default: () => {}
        },
        handleSave: {
            type: Function,
            default: () => {}
        },
        state: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    computed: {
        title () {
            return ACTIONS[this.action] + this.moduleName
        },
        showFt () {
            return this.action !== 'view'
        }
    },
    data () {
        const data = {}
        if (this.entity !== undefined) {
            data.dto = {
                ...this.getDefaultDto(),
                ..._.cloneDeep(this.entity)
            }
        }
        return data
    },
    watch: {
        entity (newVal) {
            this.dto = {
                ...this.getDefaultDto(),
                ..._.cloneDeep(newVal)
            }
        }
    },
    methods: {
        isDisabled (field) {
            if (this.action === 'add') {
                return false
            } else if (this.action === 'view') {
                return true
            } else {
                if (this.disFields.indexOf(field) !== -1) {
                    return true
                }
                return false
            }
        },
        getDefaultDto () {
            const fields = this.allFields || []
            const dto = {}
            for (let i = 0; i < fields.length; i++) {
                dto[fields[i]] = undefined
            }
            return dto
        },
        handleClose () {
            this.updateVis(false)
        },
        handleClosed () {
            if (this.$refs.form) {
                this.$refs.form.resetFields()
            }
            this.updateState('entity')
        },
        handleOk () {
            if (!this.$refs.form) {
                return
            }
            this.$refs.form.validate(valid => {
                if (!valid) {
                    return
                }
                let params = _.pick(this.dto, this.allFields)
                this.handleSave(params, () => {
                    this.handleClose()
                    this.queryList()
                }, this.action)
            })
        },
        sfcRender (type, field, { row }) {
            switch (type) {
                case 'jdAccount' :
                    return this.jdAccountRender(field, row)
                case 'mobile':
                    return this.mobileRender(field, row)
                case 'name':
                    return this.nameRender(field, row)
                case 'address':
                    return this.addressRender(field, row)
                case 'email':
                    return this.emailRender(field, row)
                default :
                    return <span>{row[field]}</span>
            }
        },
        jdAccountRender (field, row) {
            const val = row[field]
            if (!val || val.length <= 2 || row[field + 'Full'] === true) {
                return <span>{val}</span>
            } else {
                return (
                    <span>
                    {val.substr(0, 1)}
            <a class="star-btn" onClick={() => this.showFullVal(row, field)}>{this.getStars(val.length - 2)}</a>
                {val.substr(-1)}
            </span>
            )
            }
        },
        mobileRender (field, row) {
            const val = row[field]
            if (!val || val.length !== 11 || row[field + 'Full'] === true) {
                return <span>{val}</span>
            } else {
                return (
                    <span>
                    {val.substr(0, 2)}
            <a class="star-btn" onClick={() => this.showFullVal(row, field)}>{this.getStars(val.length - 6)}</a>
                {val.substr(-4)}
            </span>
            )
            }
        },
        nameRender (field, row) {
            const val = row[field]
            if (!val || row[field + 'Full'] === true) {
                return <span>{val}</span>
            } else if (val.length < 2) {
                return <a class="star-btn" onClick={() => this.showFullVal(row, field)}>{this.getStars(2)}</a>
            } else if (val.length === 2) {
                return <span>{val.substr(0, 1)}<a class="star-btn" onClick={() => this.showFullVal(row, field)}>{this.getStars(1)}</a></span>
            } else {
                return <span>{val.substr(0, 2)}<a class="star-btn" onClick={() => this.showFullVal(row, field)}>{this.getStars(2)}</a></span>
            }
        },
        addressRender (field, row) {
            const val = row[field]
            if (!val || row[field + 'Full'] === true) {
                return <span>{val}</span>
            } else if (val.length <= 2) {
                return (
                    <a class="star-btn" onClick={() => this.showFullVal(row, field)}>
                {this.getStars(val.length)}
            </a>
            )
            } else {
                return (
                <span>
                {val.length > 8 ? val.substr(0, 8) : val.substr(0, val.length - 2)}
            <a class="star-btn" onClick={() => this.showFullVal(row, field)}>
                {this.getStars(2)}
            </a>
                </span>
            )
            }
        },
        emailRender (field, row) {
            const val = row[field]
            if (!val || val.length <= 2 || row[field + 'Full'] === true) {
                return <span>{val}</span>
            } else {
                const arr = val.split('@')
                if (arr.length === 2) {
                    return (
                        <span>
                        {arr[0].length >= 2 ? arr[0].substr(0, 2) : ''}
                        <a class="star-btn" onClick={() => this.showFullVal(row, field)}>{this.getStars(3)}</a>
                    {'@' + arr[1]}
                </span>
                )
                } else {
                    return (
                        <span>
                        {val.substr(0, 2)}
                <a class="star-btn" onClick={() => this.showFullVal(row, field)}>{this.getStars(3)}</a>
                    </span>
                )
                }
            }
        },
        getStars (n = 1) {
            let stars = ''
            if (n < 0) {
                return stars
            }
            for (let i = 0; i < n; i++) {
                stars += '*'
            }
            return stars
        },
        showFullVal (row, key) {
            this.$set(row, key + 'Full', true)
        }
    }
}
