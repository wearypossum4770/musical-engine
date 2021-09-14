pub struct Client {
    pub user_id: usize,
    pub topics: Vec<String>,
    pub sender: Option<mpsc::UnboundedSender<std::result::Result<Message, warp::Error>>>,
  }


  pub struct RegisterRequest {
    user_id: usize,
  }
  
  pub struct RegisterResponse {
    url: String,
  }
  
  pub struct Event {
    topic: String,
    user_id: Option<usize>,
    message: String,
  }

  pub struct TopicsRequest {
    topics: Vec<String>,
  }
pub async fn register_handler(body: RegisterRequest, clients: Clients) -> Result<impl Reply> {
    let user_id = body.user_id;
    let uuid = Uuid::new_v4().simple().to_string();
  
    register_client(uuid.clone(), user_id, clients).await;
    Ok(json(&RegisterResponse {
      url: format!("ws://127.0.0.1:9999/ws/{}", uuid),
    }))
  }
  
  async fn register_client(id: String, user_id: usize, clients: Clients) {
    clients.lock().await.insert(
      id,
      Client {
        user_id,
        topics: vec![String::from("cats")],
        sender: None,
      },
    );
  }