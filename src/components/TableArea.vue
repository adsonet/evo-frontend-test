<template>
    <section>

        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3">
            <h1 class="evo-test-heading">Test <img style="width:18px" src="../assets/question-mark-icon.png" alt=""></h1>
            <div class="btn-toolbar mb-2 mb-md-0">
            </div>
        </div>


        <h2 class="evo-test-subheading">Select requests to perform actions</h2>

        <b-table
            :data="data"
            :checked-rows.sync="checkedRows"
            :is-row-checkable="(row) => row.id"
            checkable
            paginated
            pagination-simple= true
            :per-page="displayRowNum"
            :opened-detailed="defaultOpenedDetails"
            detailed
            detail-key="id"
            :detail-transition="transitionName"
            :show-detail-icon="showDetailIcon"
            :has-detailed-visible="(row) => row.notes"
            :checkbox-position="checkboxPosition"
            class="b-table">

            <b-table-column field="id" label="ID" width="40" numeric v-slot="props">
                {{ props.row.id }} 
            </b-table-column>

            <b-table-column field="first_name" label="First Name" sortable left v-slot="props">
                <template v-if="showDetailIcon">
                    {{ props.row.first_name }}
                </template>
                <template v-else>
                    <a @click="props.toggleDetails(props.row)">
                        {{ props.row.first_name }}
                    </a>
                </template>
            </b-table-column>

            <b-table-column field="last_name" label="Last Name" sortable left v-slot="props">
                {{ props.row.last_name }}
            </b-table-column>

            <b-table-column field="date" label="Date" sortable left v-slot="props">
                <small class="is-small">
                    {{ props.row.date }}
                </small>
            </b-table-column>

            <b-table-column label="Gender" left v-slot="props">
                    {{ props.row.gender }}
            </b-table-column>

            <b-table-column width="50" custom-key="actions" v-slot="props">
                <b-button
                    size="is-small"
                    icon-right="pencil"
                    class="no-border"
                    @click="launchModal(props)" />
            </b-table-column>

            <b-table-column width="50" custom-key="actions" v-slot="props">
                <b-button
                    size="is-small"
                    icon-right="delete"
                    class="no-border-danger"
                    @click="confirmCustomDelete(props)" />
            </b-table-column>

                    
            <template #bottom-left>
                <b>Display</b> &nbsp; 
                <b-field label="">
                    <b-select v-model="displayRowNum" placeholder="">
                        <option
                            v-for="option in selectOptions"
                            :value="option"
                            :key="option">
                            {{ option }}
                        </option>
                    </b-select>
                </b-field> &nbsp;
                <b>requests per page</b>
            </template>

            <template slot="detail" slot-scope="props">
                <article class="media">
                    <div class="media-content">
                        <div class="content">
                            <p>
                                {{ props.row.notes }}
                            </p>
                        </div>
                    </div>
                </article>
            </template>


        </b-table>

        <br>

        <b-field>
            <b-upload v-model="dropFiles" drag-drop multiple expanded @input.native="onFileChange($event)">
                <section class="section">
                <div class="content has-text-centered">
                    <p>
                    <b-icon icon="upload" size="is-large"></b-icon>
                    </p>
                    <p>Drop your files here or click to upload</p>
                </div>
                </section>
            </b-upload>
        </b-field>

        <div class="tags">
        <span v-for="(file, index) in dropFiles" :key="index" class="tag is-primary">
            {{file.name}}
            <button class="delete is-small" type="button" @click="deleteDropFile(index)"></button>
        </span>
        </div>

        <br>

    </section>
</template>

<script>
import EditModal from './EditModal.vue'
    export default {
        data() {

            const data = require('@/data/sample.json')

            return {
                data: data,
                checkboxPosition: 'left',
                checkedRows: [data[1]],
                defaultOpenedDetails: [],
                showDetailIcon: true,
                file: {},
                dropFiles: [],
                selectOptions: [2,5,10,20,50,100],
                displayRowNum : 100,
                openModal: false,
            }
        },
        computed: {
            transitionName() {
                if (this.useTransition) {
                    return 'fade'
                }
                return null
            }
        },
        methods: {
            confirmCustomDelete(recordProp) {
                let name = recordProp.row.first_name;
                this.$buefy.dialog.confirm({
                    title: 'Deleting record',
                    message: 'Are you sure you want to <b>delete</b> ' + name + '\'s record? This action cannot be undone.',
                    confirmText: 'Delete Record',
                    type: 'is-danger',
                    hasIcon: true,
                    onConfirm: () => {
                        this.deleteRecord(recordProp.index);
                        this.$buefy.toast.open(name + '\'s account deleted!')
                    }
                })
            },
            deleteDropFile(index) {
                this.dropFiles.splice(index, 1);
            },
            deleteRecord(recordIndex) {
                this.data.splice(recordIndex, 1);
            },
            launchModal(props) {
                this.$buefy.modal.open({
                    parent: this,
                    component: EditModal,
                    hasModalCard: true,
                    customClass: 'custom-class custom-class-2',
                    props:{formData: props.row, rowIndex: props.index},                 
                });            
            },
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) return;
                Array.prototype.forEach.call(files, file => this.readFile(file)); 
            },
            readFile(file) {
                let reader = new FileReader();
                reader.onload = e => {
                    let newData = JSON.parse(e.target.result);
                    this.data = [...this.data, ...newData];
                };
                reader.readAsText(file);
            }
        },
        
    }
</script>
