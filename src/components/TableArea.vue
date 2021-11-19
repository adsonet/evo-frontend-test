<template>
    <section>
        <b-table
                    :data="data"
                    
                    :checked-rows.sync="checkedRows"
                    :is-row-checkable="(row) => row.id"
                    checkable
                    paginated
                    :per-page="displayRowNum"
                    :checkbox-position="checkboxPosition"
                    :opened-detailed="defaultOpenedDetails"
                    detailed
                    detail-key="id"
                    :detail-transition="transitionName"
                    @details-open="(row) => $buefy.toast.open(`Expanded ${row.first_name}`)"
                    :show-detail-icon="showDetailIcon"
                    class="b-table"
                    >

            <b-table-column field="id" label="ID" width="40" numeric v-slot="props">
                {{ props.row.id }} 
            </b-table-column>

            <b-table-column field="first_name" label="First Name" sortable v-slot="props">
                <template v-if="showDetailIcon">
                    {{ props.row.first_name }}
                </template>
                <template v-else>
                    <a @click="props.toggleDetails(props.row)">
                        {{ props.row.first_name }}
                    </a>
                </template>
            </b-table-column>

            <b-table-column field="last_name" label="Last Name" sortable v-slot="props">
                {{ props.row.last_name }}
            </b-table-column>

            <b-table-column field="date" label="Date" sortable centered v-slot="props">
                <small class="is-small">
                    {{ new Date(props.row.date).toLocaleDateString() }}
                </small>
            </b-table-column>

            <b-table-column label="Gender" v-slot="props">
                <span>
                    <b-icon pack="fas"
                        :icon="props.row.gender === 'Male' ? 'mars' : 'venus'">
                    </b-icon>
                    {{ props.row.gender }}
                </span>
            </b-table-column>

            <b-table-column custom-key="actions" width="50">
                <!-- <button class="button is-small is-light" @click="editRow(props.row)">
                    <b-icon icon="edit" size="is-small"></b-icon> Edit
                </button> -->
                <b-button
                    label="Edit"
                    type="is-primary"
                    size="is-small"
                    @click="launchModal" />
            </b-table-column>

            <b-table-column width="50" custom-key="actions" v-slot="props">
                <b-button
                    label="Del"
                    type="is-danger"
                    size="is-small"
                    @click="confirmCustomDelete(props)" />

                <!-- <button class="button is-small is-danger" @click.native="confirmCustomDelete">
                    <b-icon icon="delete" size="is-small"></b-icon> Del
                </button> -->
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

            <!-- <template #bottom-left>
                <b>Total checked</b>: {{ checkedRows.length }}
            </template> -->

        </b-table>

        <br>

        <b-field>
            <b-upload v-model="dropFiles" drag-drop multiple expanded @change.native="onFileChange($event)">
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


    </section>
</template>

<script>
import EditModal from './EditModal.vue'
    export default {
        // components: {
        //     EditModal
        // },
        data() {
            const data = [
                { 'id': 1, 'first_name': 'Jesse', 'last_name': 'Simmons', 'date': '2016-10-15 13:43:27', 'gender': 'Male' },
                { 'id': 2, 'first_name': 'John', 'last_name': 'Jacobs', 'date': '2016-12-15 06:00:53', 'gender': 'Male' },
                { 'id': 3, 'first_name': 'Tina', 'last_name': 'Gilbert', 'date': '2016-04-26 06:26:28', 'gender': 'Female' },
                { 'id': 4, 'first_name': 'Clarence', 'last_name': 'Flores', 'date': '2016-04-10 10:28:46', 'gender': 'Male' },
                { 'id': 5, 'first_name': 'Anne', 'last_name': 'Lee', 'date': '2016-12-06 14:38:38', 'gender': 'Female' }
            ]

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
            launchModal() {
                this.$buefy.modal.open({
                    parent: this,
                    component: EditModal,
                    hasModalCard: true,
                    customClass: 'custom-class custom-class-2',
                    props:{propOpenModal: this.openModal}, 
                });
            },
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
            },
            
        },
        
    }
</script>

<style scoped>
.b-table   {
    text-align: left;
}
</style>