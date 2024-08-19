import { StyleSheet, Text, View,FlatList } from 'react-native'
import React from 'react'
import axios from 'axios'
import { useEffect,useState } from 'react'

const PostsScreen = () => {
  const [posts,setPosts]=useState([])
  useEffect(()=>{
    const fetchData=async()=>{
      const response= await axios.get("http://10.0.2.2:5000/api/posts/allPosts")
      setPosts(response.data.data)
      console.log(posts)
      
    }
    fetchData();

  },[])
  
  return (
    <View style={styles.container}>
    <FlatList
      data={posts}
      renderItem={({item})=>{
        return(<View style={styles.item}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>)
      }}
      //keyExtractor={({item})=>item.id.toString()}
           />
  </View>
  )
}

export default PostsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
    color: '#666',
  },
});