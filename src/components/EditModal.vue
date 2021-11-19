<template>
    <section>
        <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Edit Record</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                    </header>
                    <section class="modal-card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <b-field>
                                    <b-input
                                        type="text"
                                        v-model="formData.first_name"
                                        placeholder="First name"
                                        required>
                                    </b-input>
                                </b-field>
                            </div>
                            <div class="col-md-6">
                                <b-field>
                                    <b-input
                                        type="text"
                                        v-model="formData.last_name"
                                        placeholder="Last name"
                                        required>
                                    </b-input>
                                </b-field>
                            </div>
                        </div>

                        <div class="row my-5">
                            <div class="col-md-6">
                                <b-field>
                                    <b-input
                                        type="text"
                                        v-model="formData.date"
                                        placeholder="Date"
                                        required>
                                    </b-input>
                                </b-field>
                            </div>
                            <div class="col-md-6">
                                <b-select v-model="formData.gender" expanded>
                                    <option
                                        v-for="option in genderOptions"
                                        :value="option.value"
                                        :key="option.label"
                                        >
                                        {{ option.label }}
                                    </option>
                                </b-select>
                            </div>
                        </div>
                        <div class="row">
                            <b-field>
                                <b-input
                                    v-model="formData.notes"
                                    type="textarea"
                                    placeholder="Notes"
                                >
                                </b-input>
                            </b-field>
                        </div>
                        
                    </section>
                    <footer class="modal-card-foot">
                        <b-button
                            label="Close"
                            @click="$emit('close')" />
                        <!-- <b-button
                            label="Save"
                            type="is-primary" /> -->
                    </footer>
                </div>
            </form>
    </section>
</template>

<script>
    

    export default {
        props: {
            formData: Object,
            rowIndex: Number
        },
        data() {
            return {
                gender: null,
                genderOptions: [
                        {label: 'Select Gender', value: null}, 
                        {label: 'Male', value: 'Male'}, 
                        {label: 'Female', value: 'Female'}
                    ]
            }
        }
    }
</script>

<style scoped>

</style>