import { Injectable } from '@angular/core';
import { addDoc, collectionData, deleteDoc, doc,Firestore, getDoc, query, setDoc, updateDoc , where} from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { BusinessDetails } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private fService:Firestore ) { }


    // Add new business details

    addNewBusinessDetails(data: BusinessDetails) {
      data.id = doc(collection(this.fService, 'id')).id
      return addDoc(collection(this.fService, 'businessDetails' ), data)
    }

    getAllBusinessDetails() {
      let dataRef = collection(this.fService, 'businessDetails')
      return collectionData(dataRef, { idField: 'id' })
    }
}
